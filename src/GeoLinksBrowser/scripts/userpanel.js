/**
 * @class Userpanel <br>
 * the userpanel
 * @author Felix Rauchfus ;-)
 * @author Dennis Konrad
 * @version 3 (08.05.2012)
 * @param uservar a user class
 */
function Userpanel(uservar)
{
    this.user = uservar;

    /**
     * signinclicked - when signin button is clicked this code is executed
     */
    this.signinclicked = function()
    {
        if (document.getElementById("btn_signin").value == "sign in")
        {
            textinput = document.getElementById("usernameText").value;
            if (textinput == "" || textinput == "username")
            {
                gui.showMessageBox("\
                <div class='messageboxHeader'>Error</div>\
                <div class='messageboxContent'>Not a valid username!</div>\
                <input type='button' value='Ok' />");
                return;
            }
            this.user.setName(textinput);
            if (document.getElementById("btn_signin").value == "sign in")
            {
                document.getElementById("btn_signin").value = "change";
                usertext = document.getElementById("seeUsername").innerHTML; 
                document.getElementById("seeUsername").innerHTML = this.user.getName();
            }
        }
        else
        {
            document.getElementById("btn_signin").value = "sign in"; 
            document.getElementById("seeUsername").innerHTML = usertext;
        }
    }
}