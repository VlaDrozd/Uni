n=500;
lambda = 10;
x=double.empty(0,n);
for i=1:n
    x(i)=exprnd(lambda);
end
 x=sort(x);
y=expcdf(x,lambda);
cdf=[x' y'];

for alpha = [0.01 0.03 0.05]
    fprintf('Alpha = %.2f: \n',alpha);
    [h,p,ksstat,cv] = kstest(x,cdf,alpha);
    fprintf('\tp=%f ksstat=%f cv=%f \n', p, ksstat, cv);
    
    if h==0
        fprintf('\tHypothesis is accepted\n')
    else
        fprintf('\tHypothesis not accepted\n')
    end
end