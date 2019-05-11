
class Utils{
    static FirstUpperCase(args)
    {
        let original = args.split("");
        let final = [];
        for(let i = 0; i < 1; i++)
        {
            final.push(original[i].toUpperCase())
            for(let j = 1; j < original.length; j++)
            {
                final.push(original[j]);
            }
        }
       return final.join("").toString();
    }         
}