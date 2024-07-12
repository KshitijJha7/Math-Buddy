#include <bits/stdc++.h>
#define ll long long
#define pb push_back
#define popb pop_back
#define vect_arr(n) vector<int> arr(n)
#define loop(l,r) for(int i=l;i<r;i++)
#define looprev(r,l) for(int i=r;i>l;i--)
using namespace std;

void solve(){
    int n=0;
    cin>>n;

    int p[n];
    int a[n];

    vector<int> adj[n+1];
    for(int i=0;i<n;i++){
        cin>>a[i];
    }

    loop(0,n){cin>>p[i];}

    for(int i=0;i<n;i++){
        if(p[i]!=0){
            adj[p[i]].push_back(i+1);
        }
    }

    for(int i=0;i<n+1;i++){
        if(p[i]!=0){
            for(auto it:adj[i]){
            cout<<i<<" "<<it<<" ";
        }cout<<"\n";
        }
    }
    
}

int main()
{   int t;
    cin>>t;
    while(t--){
        solve();
    }
    return 0;
}