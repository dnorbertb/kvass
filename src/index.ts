import {
    myAction,
    myAction1,
    myAction2,
    myAction3,
    myAction4,
    myAction5,
} from "./func";

type AsyncFunc = () => Promise<unknown>;
type Resolve = (value: unknown) => void;

function PromiseQueue({ concurrency }: { concurrency: number }) {
    let runnersCount = 0;
    const pendingActions: { asyncFn: AsyncFunc, resolve: Resolve }[] = [];

    const runAsyncFunc = async (asyncFn: AsyncFunc, resolve: Resolve) => {
        const result = await asyncFn();
        resolve(result);
        const nextFunc = pendingActions.shift();
        if (!nextFunc) {
            runnersCount = 0;
            return;
        };
        runAsyncFunc(nextFunc.asyncFn, nextFunc.resolve);
    }

    const queue = (asyncFn: AsyncFunc) => {
        return new Promise((resolve, reject) => {
            if (runnersCount < concurrency) {
                runnersCount++;
                runAsyncFunc(asyncFn, resolve);
            } else {
                pendingActions.push({ asyncFn, resolve });
            }
        });
    }

    return queue;
}

const queue = PromiseQueue({ concurrency: 2 });

// Async syntax test
const asyncSyntaxTest = async () => {
    const x = queue(myAction);
    const y = queue(myAction1);

    const someResult = await x;
    console.log(someResult);

    const someResult1 = await y;
    console.log(someResult1);
}

asyncSyntaxTest();


// Callback syntax test
const callbackSyntaxTest = () => {
    const a = queue(myAction);
    const b = queue(myAction1);
    const c = queue(myAction2);
    const d = queue(myAction3);

    a.then((x) => {
        console.log(x);
    });

    b.then((x) => {
        console.log(x);
    });

    c.then((x) => {
        console.log(x);
    });

    d.then((x) => {
        console.log(x);
    });
}

callbackSyntaxTest();


