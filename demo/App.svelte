<script lang="ts">
  import UserPicker from "./UserPicker.svelte";
  let users = [
    {
      firstName: "Herefish",
      id: 2051,
      lastName: "User",
      name: "Herefish User",
      occupation: "",
    },
    {
      firstName: "Joseph",
      id: 11,
      lastName: "Balsamo",
      name: "Joseph Balsamo",
      occupation: "",
    },
    {
      firstName: "Manpower NPE",
      id: 4,
      lastName: "API",
      name: "Manpower NPE API",
      occupation: "",
    },
    {
      firstName: "Alex",
      id: 3,
      lastName: "Van Der Valk",
      name: "Alex Van Der Valk",
      occupation: "",
    },
    {
      firstName: "Tobias",
      id: 2,
      lastName: "Jansson",
      name: "Tobias Jansson",
      occupation: "",
    },
    {
      firstName: "****",
      id: 1,
      lastName: "****",
      name: "****1****",
      occupation: "",
    },
  ];
</script>

<main>
  <UserPicker {users} />
</main>
