<template>
  <div>
    <div class="page-title teal-text">
      <h3>Count</h3>

      <button class="btn waves-effect waves-light btn-small teal">
        <i class="material-icons">refresh</i>
      </button>
    </div>

    <div class="row">
      <div class="col s12 m6 l4">
        <div class="card teal bill-card">
          <div class="card-content">
            <span class="card-title white-text">Currency count</span>

            <p class="currency-line">
              <span class="white-text">12.0 Р</span>
            </p>
          </div>
        </div>
      </div>

      <div class="col s12 m6 l8">
        <div class="card bill-card deep-orange">
          <div class="card-content white-text">
            <div class="card-header">
              <span class="card-title">Currency rate</span>
            </div>
            <table>
              <thead>
              <tr>
                <th>Currency</th>
                <th>Rate</th>
                <th>Date</th>
              </tr>
              </thead>

              <tbody>
              <tr>
                <td>rubles</td>
                <td>12121</td>
                <td>12.12.2022</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
};

</script>
