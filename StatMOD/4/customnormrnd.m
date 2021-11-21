function eps = customnormrnd(a,R,num)
    eps=zeros(num);
    c11=sqrt(R(1,1));
    c21= R(1,2)/c11;
    c22= sqrt(R(2,2)-c21.^2);
    for i=1:num 
        n1=normrnd(0,1);
        n2=normrnd(0,1);
        eps(i,1)=c11*n1+a(1);
        eps(i,2)=c21*n1+c22*n2+a(2);
    end
    return
end
