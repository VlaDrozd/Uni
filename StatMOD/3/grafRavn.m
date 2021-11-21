n = 100; a=-5; b=5;
x = magic(n); y = magic(n); z = magic(n);
for i=1:n
    x(i) = ravn(a,b);
    z(i) = unifrnd(a,b);
    y(i) = 0;
end
 plot(x,y+0.02,'*')
 hold on
 x=-10:0.01:10;
 y3=unifpdf(x,a,b);
 plot(x,y3);
figure
plot(z,y+0.02,'*g')
hold on
plot(x,y3);
answerX=[mean(x),std(x),skewness(x),kurtosis(x),min(x),max(x)];
answerZ=[mean(z),std(z),skewness(z),kurtosis(z),min(z),max(z)];

