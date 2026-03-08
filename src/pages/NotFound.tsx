import React from "react";
import { Link } from "react-router-dom";
import { paths } from "@/app/routes/paths";
import { CenteredPanel } from "@/components/ui/CenteredPanel";
import { Button } from "@/components/ui/Button";

export function NotFoundPage() {
  return (
    <CenteredPanel title="Not found" subtitle="This route does not exist.">
      <div className="flex items-center justify-end">
        <Link to={paths.overview}>
          <Button>Return to overview</Button>
        </Link>
      </div>
    </CenteredPanel>
  );
}

