
// Test library configuration for gnu.cfg
//
// Usage:
// $ cppcheck --check-library --library=gnu --enable=information --enable=style --error-exitcode=1 --suppress=missingIncludeSystem --inline-suppr test/cfg/gnu.c
// =>
// No warnings about bad library configuration, unmatched suppressions, etc. exitcode=0
//

#include <string.h>
#include <stdlib.h>
#include <stdint.h>
#include <stdio.h>
#include <stdarg.h>
#include <sys/time.h>
#include <sys/types.h>
#include <pwd.h>
#include <sys/mman.h>
#include <sys/sem.h>
#include <wchar.h>
#ifndef __CYGWIN__
#include <sys/epoll.h>
#endif
#include <strings.h>

void *bufferAccessOutOfBounds_memrchr(const void *s, int c, size_t n)
{
    char buf[42]={0};
    (void)memrchr(buf,c,42);
    // cppcheck-suppress bufferAccessOutOfBounds
    (void)memrchr(buf,c,43);
    return memrchr(s,c,n);
}

void knownConditionTrueFalse_ffsl(long i)
{
    // ffs() returns the position of the first bit set, or 0 if no bits are set in i.
    const int x = ffsl(0);
    // cppcheck-suppress knownConditionTrueFalse
    if (x == 0) {}
    if (ffsl(i) == 0) {}
}

void knownConditionTrueFalse_ffsll(long long i)
{
    // ffs() returns the position of the first bit set, or 0 if no bits are set in i.
    const int x = ffsll(0);
    // cppcheck-suppress knownConditionTrueFalse
    if (x == 0) {}
    if (ffsll(i) == 0) {}
}

int nullPointer_semtimedop(int semid, struct sembuf *sops, size_t nsops, const struct timespec *timeout)
{
    (void) semtimedop(semid, sops, nsops, NULL); // If the timeout argument is NULL, then semtimedop() behaves exactly like semop().
    (void) semtimedop(semid, sops, nsops, timeout);
    // cppcheck-suppress nullPointer
    return semtimedop(semid, NULL, nsops, timeout);
}

void *nullPointer_mempcpy(void *dest, const void *src, size_t n)
{
    // cppcheck-suppress nullPointer
    (void) mempcpy(NULL,src,n);
    // cppcheck-suppress nullPointer
    (void) mempcpy(dest,NULL,n);
    return mempcpy(dest,src,n);
}

wchar_t *nullPointer_wmempcpy(wchar_t *dest, const wchar_t *src, size_t n)
{
    // cppcheck-suppress nullPointer
    (void) wmempcpy(NULL,src,n);
    // cppcheck-suppress nullPointer
    (void) wmempcpy(dest,NULL,n);
    return wmempcpy(dest,src,n);
}

int uninitvar_getpw(uid_t uid, char *buf)
{
    uid_t someUid;
    // cppcheck-suppress getpwCalled
    (void)getpw(uid, buf);
    // cppcheck-suppress getpwCalled
    // cppcheck-suppress uninitvar
    return getpw(someUid, buf);
}

// #9323, #9331
void syntaxError_timercmp(struct timeval t)
{
    (void)timercmp(&t, &t, <);
    (void)timercmp(&t, &t, <=);
    (void)timercmp(&t, &t, ==);
    (void)timercmp(&t, &t, !=);
    (void)timercmp(&t, &t, >=);
    (void)timercmp(&t, &t, >);
}

// False negative: #9346
void uninitvar_timercmp(struct timeval t)
{
    struct timeval uninit;
    (void)timercmp(&t, &uninit, <);
    (void)timercmp(&uninit, &t, <=);
    (void)timercmp(&uninit, &uninit, ==);
}

void nullPointer_timercmp(struct timeval t)
{
    struct timeval *p=0;
    // cppcheck-suppress nullPointer
    (void)timercmp(&t, p, <);
    // cppcheck-suppress nullPointer
    (void)timercmp(p, &t, <=);
    // cppcheck-suppress nullPointer
    (void)timercmp(p, p, ==);
}

// Declaration necessary because there is no specific / portable header.
extern void *xcalloc(size_t nmemb, size_t size);
extern void *xmalloc(size_t size);
extern void *xrealloc(void *block, size_t newsize);
extern void xfree(void *ptr);

void resourceLeak_mkostemps(char *template, int suffixlen, int flags)
{
    // cppcheck-suppress unreadVariable
    int fp = mkostemps(template, suffixlen, flags);
    // cppcheck-suppress resourceLeak
}

void no_resourceLeak_mkostemps_01(char *template, int suffixlen, int flags)
{
    int fp = mkostemps(template, suffixlen, flags);
    close(fp);
}

int no_resourceLeak_mkostemps_02(char *template, int suffixlen, int flags)
{
    return mkostemps(template, suffixlen, flags);
}

void resourceLeak_mkstemps(char *template, int suffixlen)
{
    // cppcheck-suppress unreadVariable
    int fp = mkstemps(template, suffixlen);
    // cppcheck-suppress resourceLeak
}

void no_resourceLeak_mkstemps_01(char *template, int suffixlen)
{
    int fp = mkstemps(template, suffixlen);
    close(fp);
}

int no_resourceLeak_mkstemps_02(char *template, int suffixlen)
{
    return mkstemps(template, suffixlen);
}

void resourceLeak_mkostemp(char *template, int flags)
{
    // cppcheck-suppress unreadVariable
    int fp = mkostemp(template, flags);
    // cppcheck-suppress resourceLeak
}

void no_resourceLeak_mkostemp_01(char *template, int flags)
{
    int fp = mkostemp(template, flags);
    close(fp);
}

int no_resourceLeak_mkostemp_02(char *template, int flags)
{
    return mkostemp(template, flags);
}

void valid_code(int argInt1, va_list valist_arg, int * parg)
{
    char *p;

    if (__builtin_expect(argInt1, 0)) {}
    if (__builtin_expect_with_probability(argInt1 + 1, 2, 0.5)) {}
    if (__glibc_unlikely(argInt1 != 0)) {}
    if (__glibc_likely(parg != NULL)) {}
    void *ax1 = __builtin_assume_aligned(parg, 16);
    printf("%p", ax1);
    void *ax2 = __builtin_assume_aligned(parg, 32, 8);
    printf("%p", ax2);

    p = (char *)malloc(10);
    free(p);
    p = (char *)malloc(5);
    xfree(p);
    p = (char *)xmalloc(10);
    free(p);
    p = (char *)xmalloc(5);
    xfree(p);

    // cppcheck-suppress allocaCalled
    p = __builtin_alloca(5);
    p[0] = 1;
    // TODO cppcheck-suppress arrayIndexOutOfBounds
    p[5] = 1;
    __builtin_prefetch(p, 0, 1);

    if (__builtin_types_compatible_p(int, char)) {}

    char * pStr = NULL;
    if (vasprintf(&pStr, "%d %d", valist_arg) != -1) {
        free(pStr);
    }

    printf("%d", 0b010);
    printf("%d", __extension__ 0b10001000);

    if (__alignof__(int) == 4) {}

    void * p_mmap = mmap(NULL, 1, PROT_NONE, MAP_ANONYMOUS | MAP_SHARED, -1, 0);
    printf("%p", p_mmap);
    munmap(p_mmap, 1);

    uint16_t i16_1 = 0, i16_2;
    // cppcheck-suppress unreadVariable
    i16_2 = __builtin_bswap16(i16_1++);
    uint32_t i32_1 = 0, i32_2;
    // cppcheck-suppress unreadVariable
    i32_2 = __builtin_bswap32(i32_1++);
    uint64_t i64_1 = 0, i64_2;
    // cppcheck-suppress unreadVariable
    i64_2 = __builtin_bswap64(i64_1++);

    // cppcheck-suppress zerodiv
    // cppcheck-suppress unreadVariable
    i16_1 /= bswap_16(0x1234) - 0x3412;
    // cppcheck-suppress zerodiv
    // cppcheck-suppress unreadVariable
    i32_1 /= bswap_32(0x12345678) - 0x78563412;
    // cppcheck-suppress zerodiv
    // cppcheck-suppress unreadVariable
    i64_1 /= bswap_64(0x023456789abcde0f) - 0x0fdebc9a78563402;
}

void ignoreleak(void)
{
    char *p = (char *)malloc(10);
    __builtin_memset(&(p[0]), 0, 10);
    // cppcheck-suppress memleak
}

void memleak_asprintf(char **ptr, const char *fmt, const int arg)
{
    // No warning is expected for
    if (-1 != asprintf(ptr,fmt,arg)) {
        free(ptr);
    }
    if (-1 != asprintf(ptr,fmt,arg)) {
        // TODO: Related to #8980 cppcheck-suppress memleak
    }
}

void memleak_xmalloc()
{
    char *p = (char*)xmalloc(10);
    p[9] = 0;
    // cppcheck-suppress memleak
}

void memleak_mmap()
{
    void * p_mmap = mmap(NULL, 1, PROT_NONE, MAP_ANONYMOUS | MAP_SHARED, -1, 0);
    printf("%p", p_mmap);
    // cppcheck-suppress memleak
}

void uninitvar__builtin_memset(void)
{
    void *s;
    int c;
    size_t n;
    // cppcheck-suppress uninitvar
    (void)__builtin_memset(s,c,n);
}

void bufferAccessOutOfBounds__builtin_memset(void)
{
    uint8_t buf[42];
    // cppcheck-suppress bufferAccessOutOfBounds
    (void)__builtin_memset(buf,0,1000);
}

void bufferAccessOutOfBounds()
{
    char buf[2] = "a";
    // This is valid
    sethostname(buf, 2);
    // cppcheck-suppress bufferAccessOutOfBounds
    sethostname(buf, 4);

    char * pAlloc1 = xcalloc(2, 4);
    memset(pAlloc1, 0, 8);
    // cppcheck-suppress bufferAccessOutOfBounds
    memset(pAlloc1, 0, 9);
    free(pAlloc1);

    char * pAlloc2 = xmalloc(4);
    memset(pAlloc2, 0, 4);
    // cppcheck-suppress bufferAccessOutOfBounds
    memset(pAlloc2, 0, 5);

    pAlloc2 = xrealloc(pAlloc2, 10);
    memset(pAlloc2, 0, 10);
    // cppcheck-suppress bufferAccessOutOfBounds
    memset(pAlloc2, 0, 11);

    free(pAlloc2);
}

void leakReturnValNotUsed()
{
    // cppcheck-suppress unreadVariable
    char* ptr = (char*)strdupa("test");
    // cppcheck-suppress ignoredReturnValue
    strdupa("test");
    // cppcheck-suppress unreadVariable
    char* ptr2 = (char*)strndupa("test", 1);
    // cppcheck-suppress ignoredReturnValue
    strndupa("test", 1);
    // cppcheck-suppress ignoredReturnValue
    // cppcheck-suppress nullPointer
    strcasestr("test", NULL);

    // FIXME cppcheck-suppress knownConditionTrueFalse
    // cppcheck-suppress duplicateExpression
    if (42 == __builtin_expect(42, 0))
        return;
}

#ifndef __CYGWIN__
int nullPointer_epoll_ctl(int epfd, int op, int fd, struct epoll_event *event)
{
    // no warning is expected
    (void)epoll_ctl(epfd, op, fd, event);

    // No nullpointer warning is expected in case op is set to EPOLL_CTL_DEL
    //   EPOLL_CTL_DEL
    //          Remove (deregister) the target file descriptor fd from the
    //          epoll instance referred to by epfd.  The event is ignored and
    //          can be NULL.
    return epoll_ctl(epfd, EPOLL_CTL_DEL, fd, NULL);
}
#endif
