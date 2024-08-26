export default function DashboardComponent() {
  useEffect(() => {
    console.log('Use effect inside dashboard page');
  }, []);

  return (
    <div>
      <p>This is contact page</p>
    </div>
  );
}
