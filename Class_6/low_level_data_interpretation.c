#include <stdio.h>

int main() {
    int c = 42;

    printf("integer %d\n", c);
    printf("hexadecimal %x\n", c);
    printf("floating-point %f\n", c);
    printf("characters %c\n", c);

    void* ptr =& c;

    printf("integer %d\n", *(int*)ptr);
    printf("hexadecimal %x\n", *(int*)ptr);
    printf("floating-point %f\n", *(float*)ptr);
    printf("characters %c\n", *(char*)ptr);

    return 0;
}
