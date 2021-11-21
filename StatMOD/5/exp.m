n = 1000;
lambda = 10;
X = double.empty(0,n);
for i=1:n
X(i) = exprnd(lambda);
end
count=30;
Xsort=sort(X);
l=(Xsort(n)-Xsort(1))/count;
x=Xsort(1): 0.1 : Xsort(n);
y=exppdf(x,lambda);
y=y*n*l; 
figure;
hold on;
histogram(Xsort,count);
plot(x,y,'-r');
hold off;
grid on;
