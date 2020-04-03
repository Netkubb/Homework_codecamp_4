let a = [0,9,1,8,2,7,3,6,4,5]
let i,j;
for(i=0;i<10;i++)
{
    let c = [11,0];
    for(j=i;j<10;j++)
    {
        if(c[0]>a[j])c[0] = a[j],c[1] = j;
    }
    a[c[1]] = a[i];
    a[i] = c[0];
}
for(i=0;i<10;i++) console.log(a[i]);