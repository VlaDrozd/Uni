n = 100000;
lambda = 10;
X = double.empty(0,n);
Y = double.empty(0,n);
for i=1:n
X(i) = exprnd(lambda);
Y(i)=i/n;
end
Xsort=sort(X);
x=Xsort(1): 0.1 : Xsort(n);
y=expcdf(x, lambda);
figure;
hold on;
stairs(Xsort,Y);
plot(x,y,'-r');
hold off;
grid on;
