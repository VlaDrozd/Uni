clear; clc;
n=500;
a=-10; b=10;
lambda = 10;
x=double.empty(0,n);
for i=1:n
    x(i)=exprnd(lambda);
end
 
l=5;
length=(max(x)-min(x))/l;
intervals=min(x):length:max(x);
mi = zeros(l); 
for i=1:n
    if(x(i)<intervals(2))
        mi(1)=mi(1)+1;
    elseif(x(i)<intervals(3))
        mi(2)=mi(2)+1;
    elseif(x(i)<intervals(4))
        mi(3)=mi(3)+1;
    elseif(x(i)<intervals(5))
        mi(4)=mi(4)+1;
    else
        mi(5)=mi(5)+1;
    end  
end
 
v=0;
p = double.empty(0,l);
for j=1:l
    if (j==l) 
        p(j)=1-expcdf(intervals(j),lambda);
    else
        p(j)=expcdf(intervals(j+1),lambda)-expcdf(intervals(j),lambda);
    end
    v=v+((mi(j)-n*p(j))^2)/(n*p(j));
end
 
for alpha = [0.01 0.03 0.05]
    fprintf('Alpha = %.2f: \n',alpha);
    va=chi2inv(1-alpha,l-1);  
    fprintf('\tv=%.4f va=%.4f\n',v,va);
    if v<va
        fprintf('\tHypothesis is accepted\n');
    else
        fprintf('\tHypothesis not accepted\n');
    end
end
