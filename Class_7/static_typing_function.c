#include <stdio.h>

void dump(const void *data, size_t len) {
    printf("\n-----dump------\n");
    const unsigned char *x = data;
    printf("%02x", x[0]);
    for (size_t k = 1; k < len; k++) {printf(" %02x", x[k]);}
    printf("\n----------------\n");
}

float demo(int x)
{
    dump(&x, sizeof(x));
    printf("inside %f\n", x);
    printf("inside %d\n", x);

    return x;
}

int main() {
    float f = demo(42.32);
    dump(&f, sizeof f);

    printf("outside %f\n", f);
    printf("outside %d\n", f);
    
    return 0;
}

