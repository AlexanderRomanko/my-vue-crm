<template>
  <div>
    <div class="page-title teal-text">
      <h3>Profile</h3>
    </div>

    <form class="form">
      <div class="input-field">
        <label for="description">Name<input
          id="description"
          type="text"
        ></label>
        <span
          class="helper-text invalid">Name</span>
      </div>

      <button class="btn waves-effect waves-light teal" type="submit">
        Update
        <i class="material-icons right">send</i>
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ProfileView',
};
</script>
