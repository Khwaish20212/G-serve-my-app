import ActionButton from "./action-button";
import Counter from "./counter";
export default function Sample() {
   return (
     <main className="p-12 min-h-screen bg-slate-200">
       <h4>Action Button Test</h4>
       <ActionButton text="My Action" />
       <h4>Counter</h4>
       <Counter initialCount={4} />

<div>Another Counter</div>
<Counter initialCount={100} />

</main>);
}

 