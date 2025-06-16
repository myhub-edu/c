// #include <stdio.h>
// #include <string.h>
// int main(){
//     int num, divisible_check;
//     printf("Enter any number: ");
//     scanf("%d", &num);
//     const char* result[] = {"is not divisible by 97", "is divisible by 97"};
//     divisible_check = (num % 97) == 0;
//     printf("A number %d %s", num, result[divisible_check]);
//     return 0;
// }

// Explain step by step evaluation of 3*x/y – z+k, where x=2, y=3, z=3, k=1
/*
= 3 * x / y - z + k
= 3 * 2 / y - z + k
= 6 / 3 - z + k
= 2 - 3 + k
= - 1 + 1
= 0
*/
// Biggest number finding program
// #include <stdio.h>
// int main()
// {
//     int num1 = 966, num2 = 7732, num3 = 5369;

//     if (num1 > num2 && num1 > num3)
//     {
//         printf("%d is biggest number.\n", num1);
//     }
//     else if (num2 > num1 && num2 > num3)
//     {
//         printf("%d is biggest number.\n", num2);
//     }
//     else
//     {
//         printf("%d is biggest number.\n", num3);
//     }
//     return 0;
// }
// middle number finding program
// #include <stdio.h>
// int main()
// {
//     int num1 = 5, num2 = 8, num3 = 10;

//     if ((num1 < num2 && num1 > num3) || (num1 < num3 && num1 > num2))
//     {
//         printf("%d is middle number.\n", num1);
//     }
//     else if ((num2 < num1 && num2 > num3) || (num2 < num3 && num2 > num1))
//     {
//         printf("%d is middle number.\n", num2);
//     }
//     else
//     {
//         printf("%d is middle number.\n", num3);
//     }
//     return 0;
// }
// Smallest number finding program
// #include <stdio.h>
// int main()
// {
//     int num1 = 7778, num2 = 8777, num3 = 7787;

//     if (num1 < num2 && num1 < num3)
//     {
//         printf("%d is smallest number.\n", num1);
//     }
//     else if (num2 < num1 && num2 < num3)
//     {
//         printf("%d is smallest number.\n", num2);
//     }
//     else
//     {
//         printf("%d is smallest number.\n", num3);
//     }
//     return 0;
// }

// #include <stdio.h>

// int main(){
//     int a = 20, b = 15;
//     (a>b) ? printf("%d is greatest number.", a) : printf("%d is greatest number.", b);
//     return 0;
// }

// Quick Quiz: Write a program to find grade of a student given his marks based on below:
// 90 – 100 => A
// 80 – 90 => B
// 70 – 80 => C
// 60 – 70 => D
// 50 – 60 => E
// <50 => F

// #include <stdio.h>
// int main()
// {
//     int percentage;
//     printf("Enter your Percentage: ");
//     scanf("%d", &percentage);

//     if (percentage >= 90 && percentage <= 100)
//     {
//         printf("You Got \"A\"Grade");
//     }
//     else if (percentage >= 80 && percentage < 90)
//     {
//         printf("You Got \"B\"Grade");
//     }
//     else if (percentage >= 70 && percentage < 80)
//     {
//         printf("You Got \"C\" Grade");
//     }
//     else if (percentage >= 60 && percentage < 70)
//     {
//         printf("You Got \"D\"Grade");
//     }
//     else if (percentage >= 50 && percentage < 60)
//     {
//         printf("You Got \"E\"Grade ");
//     }
//     else if (percentage < 50 && percentage < 0)
//     {
//         printf("You Got \"F\" Grade");
//     }
//     else
//     {
//         printf("\nInvalid Input! Please Enter valid percentage");
//         return 1;
//     }
//     return 0;
// }