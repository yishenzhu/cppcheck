/*
 * Cppcheck - A tool for static C/C++ code analysis
 * Copyright (C) 2007-2012 Daniel Marjam�ki and Cppcheck team.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

//---------------------------------------------------------------------------
#include "checkmutex.h"

#include "tokenize.h"
#include "token.h"
#include "errorlogger.h"
#include "symboldatabase.h"

#include <cctype>
#include <cstdlib>
#include <stdio.h>
#include <map>
//---------------------------------------------------------------------------

typedef std::map<std::string, bool>::iterator Iter;

// Register CheckMutex..
namespace {
    CheckMutex instance;
}
std::string CheckMutex::getMutexVariable(const Token * tok4) {
    std::string mutexVariable ;
    Token *tok4Link = tok4->link() ;
    for ( tok4 = tok4->next(); tok4 != tok4Link ; tok4 = tok4->next() )   {
         mutexVariable +=  tok4->str() ;
    }
    return mutexVariable ;
}

void CheckMutex::checkMutexState(std::map<std::string, bool>& mutexToState, 
            const Token * locationTok, Token *functionName) {
   for (Iter i = mutexToState.begin() ; i != mutexToState.end() ; i++ ) {
       if (i->second == true)    {
           checkMutexUsageError(locationTok, i->first, functionName->str()) ;
       }
   }
}
            
void CheckMutex::setAllMutexState(std::map<std::string, bool>& mutexToState, bool value) {
   for (Iter i = mutexToState.begin() ; i != mutexToState.end() ; i++ ) {
       i->second = value ;
   }
}

void CheckMutex::checkFunction(const Token *tok)	{
      // map mutex to its state i.e. its locked(true) or unlocked(false) 
      std::map<std::string, bool> mutexToState ; 
      bool lastReturnExists = false;

      Token * functionName = tok->link()->tokAt(-1)->link()->tokAt(-1);
      const Token *tok2 = NULL ;
      for ( tok2 = tok->link() ; tok2 && tok2 != tok; tok2 = tok2->next() ) {
         if ( tok2->str() ==  "pthread_mutex_lock" ) 	{
            const Token *tok4 = tok2->next() ; 
            if (tok4->str() != "(" ) { // make sure this is a function call
                  continue ;  
            }
            // set this mutex state to lock  
            mutexToState[getMutexVariable(tok4)] = true ; 

         } else if ( tok2->str() == "pthread_mutex_unlock" ) {
            const Token *tok4 = tok2->next() ; 
            if (tok4->str() != "(" ) { // make sure this is a function call
                  continue ;  
            }  
            // set this mutex state to unlock  
            mutexToState[getMutexVariable(tok4)] = false ;
 
         } else if ( tok2->str() == "return" ) {
           
            // check if its an interm return in the method by going to the ";"
            // token and comparing next token with tok. If its an interm return
            // then check mutex states and then set all mutexes as locked again
            const Token * tok3 = NULL ;
            for (tok3 = tok2->next(); tok3 ; tok3 = tok3->next() )   {
                if (tok3->str() == ";" ) { break ; }
            }    
            if ( tok3->next() && (tok3->next() != tok) ) { //interim return
                // check state of all mutexes 
                checkMutexState(mutexToState, tok2, functionName);  
                setAllMutexState(mutexToState, true); 
            } else { // last return. check and break from loop
                checkMutexState(mutexToState, tok2, functionName);
                lastReturnExists = true;
                break ;  
            }
         } // "return" 

      } // for loop
   
     // taking care of functions which return void and hence may not have a return statement
     if (!lastReturnExists) { 
          checkMutexState(mutexToState, tok, functionName);
     }
}

void CheckMutex::checkMutexUsageError(const Token *tok, const std::string mutex, 
					const std::string & functionName) {
    reportError(tok, Severity::error, "pthreadLockUnlockMismatch", "A pthread_mutex_lock call on mutex "
             +mutex+" doesn't have a related unlock call in function "+ functionName + ".");
}

void CheckMutex::checkMutexUsage()
{
    const SymbolDatabase *symbolDatabase = _tokenizer->getSymbolDatabase() ;
    std::list<Scope>::const_iterator scope;

    for (scope = symbolDatabase->scopeList.begin() ; scope != symbolDatabase->scopeList.end(); ++scope) {
        
         if (scope->type != Scope::eFunction) // check only functions
             continue ;
   
         const Token *tok = scope->classEnd;
         checkFunction(tok);    
   } 
}

