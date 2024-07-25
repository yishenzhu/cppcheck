# Tuning Cppcheck Analysis

There are several ways you can potentially improve the runtime of a Cppcheck analysis.

## Tuning At Build-Level

### Use Boost

### Use A Different Compiler

### Use A Higher Optimization Level

Needs to be evaluated.

### Use LTO

Needs to be evaluated. See https://trac.cppcheck.net/ticket/11671.

### Use PGO

Needs to be evaluated. See https://trac.cppcheck.net/ticket/11672.

### Use BOLT

Needs to be evaluated. See https://trac.cppcheck.net/ticket/11672.

## Tuning At Analysis-Level

### Specify A Build Dir

### Exclude Static/Generated Files

### Exclude System Headers

### Limit The Configuration

### Use Multiple Jobs

### Use A Different Threading Model

## Advanced Tuning

### Re-order The Files

### Adjust Thresholds

### Adjust Check Level