<template>
  <div>
    <div>
      <div class="breadcrumb-wrap">
        <router-link to="/history" class="breadcrumb">History</router-link>
        <a class="breadcrumb">
          Expenses
        </a>
      </div>
      <div class="row">
        <div class="col s12 m6">
          <div class="card teal">
            <div class="card-content white-text">
              <p>Description:</p>
              <p>Amount:</p>
              <p>Category:</p>

              <small>12.12.2022</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailRecordView',
};
</script>

<style scoped>

</style>
