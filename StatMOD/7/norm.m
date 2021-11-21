n = 1000; 
alpha = 2; sigma = 4; 
x = ones(1,n);
for i = 1 : n
   x(i) = normrnd(alpha,sigma);
end
[xm,s20,s2]=customnormfit(x,alpha);
y = [0.90 0.95 0.975]; 
for i = 1 : length(y)
    %mathexpect if dispersion is known
    confInt = norminv(1 - (1 - y(i)) / 2,0,1) * ((sigma / n) ^ ( 1 / 2));
    result(1,1) = xm - confInt;
    result(1,2) = xm + confInt;
    %mathexpect if dispersion is unknown
    confInt = tinv(1 - (1 - y(i)) / 2,n) * ((s2 / (n - 1)) ^ (1 / 2))  ;
    result(2,1) = xm - confInt;
    result(2,2) = xm + confInt;
    %dispersion if mathexpect is known
    result(3,1) = n * s2 / chi2inv(1 - ( 1 - y(i)) / 2,n);
    result(3,2) = n * s2 / chi2inv(1 - ( 1 + y(i)) / 2,n);
    %dispersion if mathexpect is unknown
    result(4,1) = n * s20 / chi2inv(1 - (1 - y(i)) / 2,n - 1);
    result(4,2) = n * s20 / chi2inv(1 - (1 + y(i)) / 2,n - 1);
    [muhat,sigmahat,muci,sigmaci] = normfit(x,1 - y(i));
    %Вывод:
    fprintf('Matlab: ');
    fprintf('%f\n',y(i));
    fprintf('muhat: %.4f\n', muhat);
    fprintf('sigmahat: %.4f\n', sigmahat);
    fprintf('muci: %.4f\t%.4f\n', muci(1), muci(2));
    fprintf('sigmaci: %.4f\t%.4f\n', sigmaci(1),sigmaci(2));
    fprintf('sigmaci^2: %.4f\t%.4f\n', sigmaci(1)^2,sigmaci(2)^2);
    fprintf('custom_func: ');
    fprintf('%f\n',y(i));
    fprintf('I(a,sig)\t%.4f\t%.4f\n', result(1,1),result(1,2));
    fprintf('I(a,s)\t%.4f\t%.4f\n', result(2,1),result(2,2));
    fprintf('I(sig2,s02)\t%.4f\t%.4f\n', result(3,1),result(3,2));
    fprintf('I(sig2,s2)\t%.4f\t%.4f\n', result(4,1),result(4,2));
end
