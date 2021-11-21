n = 100; k = 4;
x = []; y = []; z = [];
for i=1:n
    x(i) = pirsen(k);
    z(i) = chi2rnd(k);
    y(i) = 0;
end
 plot(x,y+0.02,'*')
 hold on
 x=-20:0.01:20;
 y3=chi2pdf(x,k);
 plot(x,y3);
figure
plot(z,y+0.02,'*g')
hold on
plot(x,y3);
answerX=[mean(x),std(x),skewness(x),kurtosis(x),min(x),max(x)];
answerZ=[mean(z),std(z),skewness(z),kurtosis(z),min(z),max(z)];
