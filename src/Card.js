function Card({data}){
    return <>
            <hr style={{color: '#57606a'}}/>
            <div style={{padding: '24px 0px'}}>
                <div>
                    <h3 style={{color: "#0969da", margin: "0"}}>{data.name}</h3>
                </div>
                <div style={{marginBottom: "4px"}}>
                    <p style={{color: '#57606a', fontSize: "14px", margin: "0"}}>{data.description}</p>
                </div>
                <div style={{fontSize: "12px", color: "#57606a"}}>
                    <span style={{margin : "10px 10px 10px 0"}}>
                        {data.language}
                    </span>
                   {data.forks_count>0 && <span style={{margin : "10px 10px 10px 10px"}}>
                    <svg aria-label="fork" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo-forked">
    <path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
</svg> {data.forks_count}
                    </span>}
                    <span style={{margin : "10px 10px 10px 10px"}}>
                        Last Updated at
                    </span>
                </div>
            </div>
        </>
}
export default Card;