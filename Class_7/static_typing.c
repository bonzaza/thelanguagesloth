#include <stdio.h>

int main() {
    int i; 
    i = 'c'; // a sort of trick
    printf("%d\n", sizeof(i));
    printf("%c\n", i);
    printf("%d\n", i);
    printf("-----------\n");

    i = 42.e4; // 42.e32; // warning overflow
    printf("%d\n", sizeof(i));
    printf("%f\n", i);

    return 0;
}

