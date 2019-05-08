export default function() {
  return [
    {
      title: "Introduce",
      to: "/intro",
      htmlBefore: '<i class="material-icons">public</i>',
      htmlAfter: "",
      login: false
    },
    {
      title: "Overview",
      to: "/overview",
      htmlBefore: '<i class="material-icons">view_array</i>',
      login: true
    },
    {
      title: "Login",
      htmlBefore: '<i class="material-icons">how_to_reg</i>',
      to: "/login",
      login: false,
    },
    {
      title: "Join",
      htmlBefore: '<i class="material-icons">people</i>',
      to: "/join",
      login: false,
    },
    {
      title: "Add Device",
      htmlBefore: '<i class="material-icons">add_circle_outline</i>',
      to: "/add-device",
      login: true,
    },
    {
      title: "User Information",
      htmlBefore: '<i class="material-icons">person</i>',
      to: "/user-info",
      login: true,
    },
    {
      title: "Statistics",
      htmlBefore: '<i class="material-icons">bar_chart</i>',
      to: "/stat",
      login: true,
    },
  ];
}
