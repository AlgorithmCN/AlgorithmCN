#include<iostream>
using namespace std;

int get_mid_pos(int s[], int i, int j)
{
    //初始化
    //循环条件是i < j
    //循环内先判断j，在判断i
    int x = s[i];
    while (i < j){
        //右边寻找小于x的
        while (i < j && s[j] > x){
            j--;
        }
        if (i < j){
            s[i] = s[j];
        }else{
            break;
        }
        //左边寻找大于x的
        while (i < j && s[i] < x){
            i++;
        }
        if (i < j){
            s[j] = s[i];
        }else{
            break;
        }
    }
    s[i] = x;
    return i;
}

void quick_sort(int s[], int l, int r)
{
    int i;
    if (l < r){
        i = get_mid_pos(s, l, r);
        quick_sort(s, l, i-1);
        quick_sort(s, i+1, r);
    }
}

int main()
{
    int sort_num[] = {72,6,57,88,60,42,83,73,48,85};
    quick_sort(sort_num, 0, 9);
    //int a = get_mid_pos(sort_num, 0, 9);
    //cout<<a<<endl;
    for (int i; i<10; i++){
        cout<<sort_num[i]<<"\t";
    }
    cout<<endl;
}
