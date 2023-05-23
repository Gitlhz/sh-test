import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json())
function request(url) {
  const { data, error, isLoading } = useSWR(url, fetcher)

  return {
    data,
    isLoading,
    error,
  }
}
export {request};
