


<script>
    
    import { invalidateAll } from '$app/navigation';
    import { SvelteComponent, onMount } from 'svelte';
    
 
   export let data;

    onMount(()=> {
         const interval = setInterval(() =>{
            invalidateAll().then(() => {
        /**
             * @type {any[]}
             */
        const issuesInProgress = [];
        /**
             * @type {any[]}
             */
        const issuesInReview = [];
        /**
                 * @type {any[]}
                 */
        const inProgressByEngineer = [];
        /**
                 * @type {any[]}
                 */
        const inRevewByEngineer = [];
        const issuesDone = [];
        /**
                 * @type {any[]}
                 */
        const doneByEngineer = [];

        data.issues.forEach(issue => {
            if (issue.fields.status.name.toLowerCase() === 'in progress'){
                issuesInProgress.push(issue);

                if (issue.fields.assignee != null && issue.fields.assignee.displayName != null){
                inProgressByEngineer.push(issue.fields.assignee.displayName);
            }
            } else if (issue.fields.status.name.toLowerCase() === 'in review') {
                issuesInReview.push(issue);

                if (issue.fields.assignee != null && issue.fields.assignee.displayName != null) {
                    inRevewByEngineer.push(issue.fields.assignee.displayName);
                }
            } else if (issue.fields.status.name.toLowerCase() === 'done') {
                issuesDone.push(issue);

                if (issue.fields.assignee != null && issue.fields.assignee.displayName != null) {
                    doneByEngineer.push(issue.fields.assignee.displayName);
                }
            }
            
        });
        const issuesInProgressDiv = document.getElementById("IP");
        const issuesInReviewDiv = document.getElementById("IR");
        const engineerInProgressDiv = document.getElementById("EIP");
        const engineerInReviewDiv = document.getElementById("EIR");
        const engineerDoneDiv = document.getElementById("ED");
        issuesInProgressDiv.textContent = 'Issues in Progress: \n' + issuesInProgress.length
        issuesInReviewDiv.textContent = 'Issues in Review: \n' + issuesInReview.length
        engineerInProgressDiv.textContent = 'Engineers who are In Progress: ' + inProgressByEngineer+ " ";
        engineerInReviewDiv.textContent = 'Engineers who are In Review: ' + inRevewByEngineer+ " ";
        engineerDoneDiv.textContent = 'Engineers who are Done: ' + doneByEngineer+ " ";

    })
         }, 5000);

         return () => {
             clearInterval(interval);
         }

    })
    


</script>

<style>
      body {
        
        background-color: #8ecae6;
        font-size: 24px;
      }
      div {
        color: #ffffff;
        background-color: #2b36b5;
        padding: 20px;
        margin: 10px;
        border-radius: 10px;
        text-align: center;
      }
    </style>



    <body>
        <div id="IP">In Progress</div>
      <div id="IR">In Review</div>
      <div id="EIP">Engineers In Progress</div>
      <div id="EIR">Engineers In Review</div>
      <div id="ED">Engineers Done</div>
    </body>
      
      
      
      
      
