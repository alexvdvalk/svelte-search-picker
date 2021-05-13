<script lang="ts">
  import { fade } from "svelte/transition";
  import UserRow from "./UserRow.svelte";

  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  export let users = [];
  let value = "";
  let shown = false;
  let selectedUsers = [];
  let selectedUsersCopy = [];

  $: filteredList = users.filter((row) =>
    row.name.toLowerCase().includes(value.toLowerCase())
  );
  $: selectedUsers = users.filter((row) => row.selected === true);
  $: userids = selectedUsers.map((row) => row.id);

  const cancel = () => {
    users = JSON.parse(JSON.stringify(selectedUsersCopy));
    shown = false;
  };

  const save = () => {
    shown = false;
    if (userids.length > 0) {
      dispatch("onUsersSelected", userids);
    }
  };

  const outsideClicked = (event) => {
    if (!event.target.closest(".outer,.dropdown-toggle")) {
      save();
    }
  };

  const openToggle = () => {
    if (!shown) {
      selectedUsersCopy = JSON.parse(JSON.stringify(users));
    }

    shown = !shown;
  };
  const clearValue = () => {
    value = "";
  };
</script>

<svelte:window on:click={outsideClicked} />
<svelte:head>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-wEmeIV1mKuiNpC+IOBjI7aAzPcEZeedi5yW5f2yOq55WWLwNGmvvx4Um1vskeMj0"
    crossorigin="anonymous"
  />
</svelte:head>

<div class="dropdown">
  <button
    type="button"
    class="btn btn-secondary dropdown-toggle dropdown-toggle"
    on:click={openToggle}>Users ({selectedUsers.length})</button
  >
  {#if shown}
    <div
      class="rounded-3 border-dark outer shadow"
      transition:fade={{ duration: 125 }}
    >
      <div class="input p-2 input-group">
        <input class="form-control " bind:value />
        <span class="input-group-text" on:click={clearValue}
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-backspace-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="M15.683 3a2 2 0 0 0-2-2h-7.08a2 2 0 0 0-1.519.698L.241 7.35a1 1 0 0 0 0 1.302l4.843 5.65A2 2 0 0 0 6.603 15h7.08a2 2 0 0 0 2-2V3zM5.829 5.854a.5.5 0 1 1 .707-.708l2.147 2.147 2.146-2.147a.5.5 0 1 1 .707.708L9.39 8l2.146 2.146a.5.5 0 0 1-.707.708L8.683 8.707l-2.147 2.147a.5.5 0 0 1-.707-.708L7.976 8 5.829 5.854z"
            />
          </svg></span
        >
      </div>
      <div class="userlist">
        {#each filteredList as user (user.id)}
          <div transition:fade={{ duration: 85 }}>
            <UserRow bind:user />
          </div>
        {/each}
      </div>
      <div class="d-flex justify-content-end p-1 input">
        <div>
          <button type="button" class="btn btn-secondary" on:click={cancel}
            >Cancel</button
          >
          <button type="button" class="btn btn-primary" on:click={save}
            >Save</button
          >
        </div>
      </div>
    </div>
  {/if}
</div>

<style>
  .input-group-text:hover {
    cursor: pointer;
  }
  .dropdown {
    position: relative;
    display: inline-block;
  }
  .input {
    background: #f6f6f6;
  }
  .outer {
    width: 200px;
    /* height: 300px; */
    /* border: 1px solid black; */
    position: absolute;
    display: block;
    /* top: 0;
		bottom: 0;
		left: 0;
		right: 0; */
    /* position: relative; */
    /* display: inline-block; */
    overflow: hidden;
    background: white;
  }
  .userlist {
    height: 250px;
    margin: 3px;
    overflow-y: auto;
  }
</style>
