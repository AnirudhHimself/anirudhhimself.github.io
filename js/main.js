var menuBar = {
    toggleNav: function() {
        var bodyElement = document.getElementsByClassName("listener")[0];
        var openNav = function() {
            document.getElementById("menu").style.width = "250px";

            var menubtns = document.getElementsByClassName("menu-btn");
            var i;
            for (i = 0; i < menubtns.length; i++) {
                menubtns[i].style.color = "#001f3f";
                menubtns[i].style.transition = "all 0.34s ease 0s";
            }

            document.body.style.backgroundColor = "rgba(0,0,0,0.6)";
            document.body.style.transition = "all 0.5s ease 0s";

            setTimeout(function() {
                bodyElement.addEventListener("click", menuBar.toggleNav);
            }, 200);
        }
        var closeNav = function() {
            document.getElementById("menu").style.width = "0px";

            var menubtns = document.getElementsByClassName("menu-btn");
            var i;
            for (i = 0; i < menubtns.length; i++) {
                menubtns[i].style.color = "#ddd";
                menubtns[i].style.transition = "color 0.25s ease 0s";
            }

            document.body.style.backgroundColor = "rgba(0,0,0,0)";
            document.body.style.transition = "all 0.34s ease 0s";

            setTimeout(function() {
                bodyElement.removeEventListener("click", menuBar.toggleNav);
                console.log("Removing Event listener");
            }, 200);
        }
        var menu_icon = document.getElementById("menu-icon");
        if (menu_icon.getAttribute("src") == "assets/menu-icon.svg") {
            menu_icon.setAttribute("src", "assets/close-button.svg");
            console.log(menu_icon.src);
            openNav();
        } else {
            menu_icon.setAttribute("src", "assets/menu-icon.svg");
            closeNav();
        }
    }
};