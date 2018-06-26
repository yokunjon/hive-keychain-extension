steem.api.setOptions({ url: 'https://api.steemit.com' });

$("#add_account").click(function(){
  $("#add_account_div").css("display","block");
  $("#main").css("display","none");
});

$(".back_menu").click(function(){
    ReinitializeAddAccountPage();
    $("#main").css("display","block");
});

$("#check_add_account").click(function(){
  $("#message_account_checked").css("display","block");
  $("#master_check").css("display","none");
  const username=$("#username").val();
  const pwd=$("#pwd").val();
  if(username!==""&&pwd!==""){
    steem.api.getAccounts([username], function(err, result) {
      console.log(err, result);
      if (result.length!=0)
      {
        const pub_active=result["0"].active.key_auths["0"]["0"];
        const pub_posting=result["0"].posting.key_auths["0"]["0"];
        const pub_memo=result["0"].memo_key;
        if(steem.auth.isWif(pwd)){
          if(isMemoWif(pwd,pub_memo)){
            $("#message_account_checked").html("Saved memo key for user @"+username+"!");
            addAccount({name:username,keys:{memo:pwd,memoPubkey:pub_memo}});
          }
          else if(isPostingWif(pwd,pub_posting)){
            $("#message_account_checked").html("Saved posting key for user @"+username+"!");
            addAccount({name:username,keys:{posting:pwd,postingPubkey:pub_posting}});
          }
          else if(isActiveWif(pwd,pub_active)){
            $("#message_account_checked").html("Saved active key for user @"+username+"!");
            addAccount({name:username,keys:{active:pwd,activePubkey:pub_active}});
          }
        }
        else {
          const keys=steem.auth.getPrivateKeys(username, pwd, ["posting","active","memo"]);
          if(keys.activePubkey==pub_active&&keys.postingPubkey==pub_posting&&keys.memoPubkey==pub_memo)
          {
            $("#message_account_checked").html("You entered your master key, select which private keys you wish to save. Your master key will not be saved.");
            $("#master_check").css("display","block");
          }
          else
            $("#message_account_checked").html("Incorrect private key or password.");

        }
      }
      else
        $("#message_account_checked").html("Incorrect username");
    });
  }
  else
    $("#message_account_checked").html("Please fill the fields");
});

$("#save_master").click(function(){
  if($("#posting_key").prop("checked")||$("#active_key").prop("checked")||$("#memo_key").prop("checked")){
    var permissions=[];
    if($("#posting_key").prop("checked"))
      permissions.push("posting");
    if($("#active_key").prop("checked"))
      permissions.push("active");
    if($("#memo_key").prop("checked"))
      permissions.push("memo");
    const keys=steem.auth.getPrivateKeys($("#username").val(), $("#pwd").val(), permissions);
    addAccount({name:username,keys:keys});

  }
});

// Add new account to Chrome local storage
function addAccount(account)
{
  console.log(account);
}

// Set visibilities back to normal when coming back to main menu
function ReinitializeAddAccountPage()
{
    $("#add_account_div").css("display","none");
    $("#message_account_checked").css("display","none");
    $("#master_check").css("display","none");
    $("#username").val("");
    $("#pwd").val("");
    $("#message_account_checked").html("");
    $("#posting_key").prop("checked",true);
    $("#active_key").prop("checked",true);
    $("#memo_key").prop("checked",true);
}

//Check WIF validity

function isActiveWif(pwd,active)
{
  return steem.auth.wifToPublic(pwd)==active;
}

function isPostingWif(pwd,posting)
{
  return steem.auth.wifToPublic(pwd)==posting;
}

function isMemoWif(pwd,memo)
{
  return steem.auth.wifToPublic(pwd)==memo;
}
