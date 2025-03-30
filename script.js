let c=1;
let m=[['0','0','0'],['0','0','0'],['0','0','0']];
let p1,p2;
let flag=false
setTimeout(function(){
    p1=prompt("Enter player 1 name::");
},2000);
setTimeout(function(){
    p2=prompt("Enter player 2 name::");
},5000);


function btn(i,j,k)
{
    console.log(c);
    if(m[i][j]!='0')
        alert("Already filled");
    else if(c%2!=0 && c<=9 && !flag)
    {
        m[i][j]='x';
        document.getElementsByClassName('buttons')[k].textContent='x';
        document.getElementsByClassName('buttons')[k].style.color="black";
        cond();
        if(c==9 && !(flag))
            {
                document.getElementsByTagName('p')[0].textContent="Game over. Its a draw!";
            }
        c++;
    }
    else if(c%2==0 && c<9 && !flag){
        m[i][j]='o';
        document.getElementsByClassName('buttons')[k].textContent='o';
        document.getElementsByClassName('buttons')[k].style.color="black";
        c++;
        cond();
    }
}
function cond()
{
    if(m[0][0]==m[2][2] && m[1][1]==m[2][2])
        check(1,1);
    else if(m[1][1]==m[0][2] && m[1][1]==m[2][0])
        check(1,1);
    else if(m[0][1]==m[2][1] && m[1][1]==m[2][1])
        check(1,1);
    else if(m[1][0]==m[1][1] && m[1][1]==m[1][2])
        check(1,1);
    else if(m[0][1]==m[0][0] && m[0][0]==m[0][2])
        check(0,2);
    else if(m[0][2]==m[1][2] && m[0][2]==m[2][2])
        check(0,2);
    else if(m[0][0]==m[2][0] && m[2][0]==m[1][0])
        check(2,0);
    else if(m[2][0]==m[2][1] && m[2][0]==m[2][2])
        check(2,0);
    else{}
}

function check(i,j)
{
    if(m[i][j]=="x")
        {
            if(p1==null)
                document.getElementsByTagName('p')[0].textContent="Player 1 wins!" ;
            else
                document.getElementsByTagName('p')[0].textContent=p1+" wins!" ;
            flag=true;
            
        }
    else if(m[i][j]=="o")
    {
        if(p2==null)
            document.getElementsByTagName('p')[0].textContent="Player 2 wins!" ;
        else
            document.getElementsByTagName('p')[0].textContent=p2+" wins!" ;
        flag=true;
    }
}

function reset()
{
    window.location.reload();
}