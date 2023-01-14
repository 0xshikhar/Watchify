// eslint-disable-next-line import/no-anonymous-default-export
export default (req: any, res: {
    status: (arg0: number) => {
        (): any; 
        new(): any;
        json: {
            (arg0: { firstCourse: string; secondCourse: string; thirdCourse: string; }):
                void; new(): any;
        };
    };
}) => {
    //export default (req, res) => {
    res.status(200).json({
        firstCourse: 'Web Development',
        secondCourse: 'AI',
        thirdCourse: 'Mobile Development'
    });
};
