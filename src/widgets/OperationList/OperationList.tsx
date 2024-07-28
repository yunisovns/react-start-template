OperationListProps= {
    
}

const OperationList: React.FC<OperationListProps> = ({
    operations
})=>{
    return (
        <div className="flex flex-col gap-2">
            {operations.map((operation, index) => (
                <OperationItem key={index} operation={operation} />
            ))}
        </div>
    )
}
