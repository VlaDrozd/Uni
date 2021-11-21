n = 500; lm = 4;
x = magic(n); y = magic(n); z = magic(n);
for i=1:n
    x(i) = exponent(lm);
    z(i) = exprnd(lm);
    y(i) = 0;
end
 plot(x,y+0.02,'*')
 hold on
 x=-0:0.005:20;
 y3=exppdf(x,lm);
 plot(x,y3);
figure
plot(z,y+0.02,'*g')
hold on
plot(x,y3); 
answerX=[mean(x),std(x),skewness(x),kurtosis(x),min(x),max(x)];
answerZ=[mean(z),std(z),skewness(z),kurtosis(z),min(z),max(z)];
