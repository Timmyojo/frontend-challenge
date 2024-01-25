<script>
    import Chart from 'chart.js/auto';
    const data = {
          labels: ['Jan', 'Feb', 'Mar', "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          datasets: [
              {
                  data: [40000, 45000, 20000, 35000, 15000, 33000, 48000, 27000, 30000, 5000, 10000, 42000],
                  backgroundColor: 'rgb(94,234,212, 0.3)',
                  hoverBackgroundColor: ['#34CAA5'],
                  borderWidth: 0,
                  barThickness: 20,
              }
          ]
      };
      const config = {
          type: 'bar',
          data: data,
          options: {
              borderRadius: '50',
              responsive: true,
              cutout: '95%',
              spacing: 2,
              maintainAspectRatio: false,
              plugins: {
                tooltip: {
                enabled: false,
              },
                legend: {
                    display: false
                },
                tooltip: {
                    displayColors: false,
                    callbacks: {
                        title: ()=> '',
                        label: function (context) {
                            return `$${context.formattedValue}`
                        }
                    }
              },
              },
             
              scales: {
                x: {
                    grid: {
                        color: "rgba(256, 256, 256)"
                    }
                },
                y: {
                        min: 0,
                        max: 50000,
                        ticks: {
                        stepSize: 10000,
                    },
                    grid: {
                        color: "rgba(0, 0, 0, 0.06)"
                    }
                    }
              }
          }
      };
	
	const handleChart = (element, config) => {
		let theChart = new Chart(element, config)
		
		return {
			update(config) {
				theChart.destroy()
				theChart = new Chart(element, config)
			},
			destroy() {
				theChart.destroy()
			}
		}
	}
</script>

<canvas use:handleChart={config} />
