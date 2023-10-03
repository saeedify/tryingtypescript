interface Props {
    name:string;
    gender:Gender;
    age:number;
    isMarried:boolean;
    friends:string[];
}

export enum Gender {
    Male="Male",
    Female="Female",
    Other="Other",
}

export const Person = (props: Props) => {
    return (
        <div>

            <h1>Name:{ props.name }</h1>
            <h1>Age: { props.age }</h1>
            <h1>Gender: { props.gender }</h1>
            <h1>This Person is Married: { props.isMarried }</h1>
            <h1>Friends: </h1>
            { props.friends.map( (friend:string) => (
                <h2>{friend}</h2>
            )) }

        </div>
    );
}