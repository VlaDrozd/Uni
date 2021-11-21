function L = custombinofit(z, x)
    n = z(1); p = z(2);
    L = 1;
    pdf = binopdf(x, n, p);
    for i = 1:length(x)
        L = L * pdf(i);
    end
    L = - log(L);
    return
end
