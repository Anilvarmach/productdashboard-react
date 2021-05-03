import Card from './card'
export default function Dashboard() {
    
  const cardData = [
    {
      name: ' Earnings (Monthly',
      total: '$40000',
      icon: ' fa-calendar',
      border: 'border-left-primary',
      text: 'text-primary'
    },
    {
      name: ' Earnings (Annual)',
      total: '$215,000',
      icon: '  fa-dollar-sign',
      border: 'border-left-success',
      text: 'text-success'
    },
    {
      name: 'Task',
      total: '50%',
      icon: ' fa-clipboard-list',
      border: 'border-left-info',
      text: 'text-info'
    },
    {
      name: 'Pending Requests',
      total: '80',
      icon: ' fa-comments',
      border: 'border-left-warning',
      text:'text-warning'
  }]
    return <>
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
            <a href="#!" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
        </div>
        <div class="row">
              {
                cardData.map((data) => {
                 return  <Card place= {data}></Card>
                })
            }
            </div>
    </>
}