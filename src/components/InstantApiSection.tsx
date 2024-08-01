const InstantApiSection = () => {
    return (
        <div className="container mx-auto mt-36 grid mb-36 grid-cols-1 md:grid-cols-2 gap-8 p-4">
            <div className="flex flex-col justify-center">
                <h1 className="text-2xl font-bold mb-4 roboto-bold">Instant APIs that do the hard work for you</h1>
                <p className="text-sm text-white text-opacity-50 mb-8">
                    We introspect your database to provide APIs instantly. Stop building repetitive CRUD endpoints and focus on your product.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-5">
                    <div className="flex flex-col gap-2">
                        <h2 className="roboto-bold">TypeScript support</h2>
                        <p className="text-sm text-white text-opacity-50 w-[75%]">
                            Type definitions built directly from your database schema
                        </p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2 className="roboto-bold">Install from CDN</h2>
                        <p className="text-sm text-white text-opacity-50 w-[75%]">
                            Use Supabase in the browser without a build process
                        </p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2 className="roboto-bold">Local emulator</h2>
                        <p className="text-sm text-white text-opacity-50 w-[75%]">
                            Develop locally and push to production when you're ready
                        </p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2 className="roboto-bold">Supabase CLI</h2>
                        <p className="text-sm text-white text-opacity-50 w-[75%]">
                            Manage Supabase projects from your local machine
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center">
                
                <img src="./code.png" alt="Illustration" className="h-[400px] w-auto rounded-xl object-cover" />
            </div>
        </div>
    );
};

export default InstantApiSection;
