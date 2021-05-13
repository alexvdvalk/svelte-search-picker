<script>
  export let user;
</script>

<div>
  <label>
    <input
      class="form-check-input"
      type="checkbox"
      bind:checked={user.selected}
    />
    {user.name}
  </label>
</div>

<style>
  div {
    margin: 2px;
    padding-left: 3px;
  }
</style>
