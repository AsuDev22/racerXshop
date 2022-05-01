import DashboardMenu from "../components/DashboardMenu";

const DashboardScreen = {
  after_render: () => {},
  render: () => {
    return `
    <div class="dashboard">
      ${DashboardMenu.render({ selected: "dashboard" })}
      <div class="dashboard-content">
        <h1>Dashboard</h1>
        <div>
        Select Orders tab on left column to delete an order or to set an order as delivered.
        <hr>Select products tab from column to add or edit a product.
        </div>
      </div>
    </div>
    `;
  },
};
export default DashboardScreen;
