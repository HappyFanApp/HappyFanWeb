function dashboard()
{
    var data = JSON.parse(localStorage.getItem("dashboard"));
    console.log(data);
    $("#companyname").html(data.dashboard.companyname);
    $("#description").html(data.user.description);
    $("#logo").attr("src",data.dashboard.picture);
    $("#Time").html(data.user.time);
    $("#Atendeed").html(data.user.atendeed)
    $("#Meetings").html(data.user.meetings);
    $("#Rejected").html(data.user.rejects);
    user();

}
async function user()
{
    var profile = await JSON.parse(localStorage.getItem("profile")); 
    $("#name").html(profile.name);
    $("#picture").attr("src",profile.picture);
    console.log(profile.name);
}

const hostChat = 'http://localhost:3001';

//const ngrok = "http://fa0f-90-167-12-58.ngrok.io";

const socket = io(hostChat , {
    auth: (cb) => { cb({ token: localStorage.token })},
    transports: ['websocket'] 
});

socket.on("connect", () => {
    console.log("Conectado al servidor");
    socket.emit("demo", localStorage.tokenDashboard);
}).on("disconnect", () => {
    console.log("Desconectado del servidor");
        location.replace("/start")
}).on("dashboard", data => {
    console.log(data);
    localStorage.setItem("dashboard", JSON.stringify(data) );
    dashboard();
}).on("chat", data => {
    console.log(data);
}).on("error", err => {
    console.log(err);
    location.replace("/start")
});