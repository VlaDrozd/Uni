n = 1000;
m = 40;
p = m / n;
q = 1 - p; 
y = [ 0.90 0.95 0.975];

for i = 1 : length(y)
    confInt = norminv(1 - (1 - y(i)) / 2,0,1) * ((p * q / n) ^ ( 1 / 2));
    result(1,1) = p - confInt;
    result(1,2) = p + confInt;

    [phat,pci] = binofit(m,n,1-y(i));

    %Вывод:
    fprintf('Matlab: ');
    fprintf('%f\n',y(i));
    fprintf('phat: %.4f\n', phat);
    fprintf('pci: %.4f\t%.4f\n', pci(1),pci(2));
    
    fprintf('custom_func: ');
    fprintf('%f\n',y(i));
    fprintf('pci\t%.4f\t%.4f\n',result(1,1),result(1,2));
end
