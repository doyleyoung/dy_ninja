//Doyle Young
//9/16/96
//Donna Thornberry
//This is program cp1, it computes the value of assorted variables using the
//values given in the assignment.
#include <iostream.h>
#include <math.h>

int main ()
{

   //Constant declarations
   const double PI=3.1416;
   const double G=9.807;

   //Variable declarations
   double v = 5.1;    // These variables are given in the handout with the raw
   double a = 1.2;    //values assigned to them.
   double t = 2.2;
   double l = 2.1;
   double Tk = 492.3;
   double h = 3.2;
   double b = 2.3;
   double x1 = 1.2;
   double x2 = 2.8;
   double y1 = 12.6;
   double y2 = 3.9;
   double dp1 = 0;      //These variables are used for breaking down equations.
   double dp2 = 0;
   double App1 = 0;
   double App2 = 0;
   double m = 0;          //Variable for slope value
   double d = 0;          //Variable for distance value
   double x = 0;          //Variable for distance by acceleration value
   double Tf = 0;         //Variable for Farenheit degrees
   double Tau = 0;        //Variable for period of a pendulum
   double Ap = 0;         //Variable for arc length
   double Req = 0;        //Variable for equivalent resistance of a circuit


   //Program body
   m = (y2 - y1)/(x2 - x1);                 //slope
   cout <<"m = "<<m<<endl;

   dp1 = y2 - y1;                           //distance
   dp2 = x2 - x1;
   d = sqrt(pow(dp1,2) + pow(dp2,2));
   cout <<"d = "<< d <<endl;

   x = x1 + v * t + (a * pow(t,2) / 2);     //distance by acceleration
   cout <<"x = "<< x <<endl;

   Tf = ((9.0/5.0) * Tk) - 459.67;          //Farenheit
   cout <<"Tf = "<< Tf <<endl;

   Tau = 2 * PI * (sqrt(l/G));              //period of a pendulum
   cout <<"Tau = "<< Tau <<endl;

   App1 = sqrt(pow(b,2) + 16 * pow(h,2));   //arc length 
   App2 = pow(b,2)/(8 * h);
   Ap = 0.5 * App1 + App2 * log((4 * h + App1)/b);
   cout <<"Ap = "<< Ap <<endl;

   Req = 1.0 / ((1.0/7.0) + (1.0 / ((1.0/5.0) + (1.0/3.0))) + (1.0 / ((1.0/4.0)          + (1.0/3.0)))); 
   cout <<"Req = "<< Req << endl;           //equivalent resistance of circuit
return(0);
} //end main

