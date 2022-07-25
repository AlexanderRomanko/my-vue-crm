<template>
  <div>
    <div class="page-title teal-text">
      <h3>New Record</h3>
    </div>

    <form class="form">
      <!--      <div class="input-field" >-->
      <!--        <label>Choose the category</label>-->
      <!--        <select>-->
      <!--          <option>name cat</option>-->
      <!--        </select>-->
      <!--      </div>-->

      <p>
        <label for="income">
          <input
            class="with-gap"
            id="income"
            name="type"
            type="radio"
            value="income"
          />
          <span>Income</span>
        </label>
      </p>

      <p>
        <label for="outcome">
          <input
            class="with-gap"
            id="outcome"
            name="type"
            type="radio"
            value="outcome"
          />
          <span>Expense</span>
        </label>
      </p>

      <div class="input-field">
        <label for="amount">Amount<input
          id="amount"
          type="number"
        ></label>
        <span class="helper-text invalid">Amount password</span>
      </div>

      <div class="input-field">
        <label for="description">Description<input
          id="description"
          type="text"
        ></label>
        <span
          class="helper-text invalid">Description password</span>
      </div>

      <button class="btn waves-effect waves-light teal" type="submit">
        Save
        <i class="material-icons right">send</i>
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'RecordView',
};
</script>
