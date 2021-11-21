n = 10000;
a = -100;
b = 100;
X = double.empty(0,n);
Y = double.empty(0,n);
for i=1:n
X(i) = unifrnd(a,b);
Y(i)=i/n;
end
Xsort=sort(X);
x=Xsort(1): 0.1 : Xsort(n);
y=unifcdf(x,a,b);
figure;
hold on;
stairs(Xsort,Y);
plot(x,y,'-r');
hold off;
grid on;
