export default interface DotnetResponce<T> {
    data: T | undefined,
    success: boolean,
    error: string
};
