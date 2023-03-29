const myAction = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve(1) }, 1000)
    });
}

const myAction1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve(2) }, 1000)
    });
}


const myAction2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve(3) }, 1000)
    });
}

const myAction3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve(4) }, 1000)
    });
}

const myAction4 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve(5) }, 1000)
    });
}

const myAction5 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve(6) }, 1000)
    });
}

export {
    myAction,
    myAction1,
    myAction2,
    myAction3,
    myAction4,
    myAction5,
}