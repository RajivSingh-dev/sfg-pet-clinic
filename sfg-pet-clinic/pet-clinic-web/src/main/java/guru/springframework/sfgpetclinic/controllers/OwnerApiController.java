package guru.springframework.sfgpetclinic.controllers;


import guru.springframework.sfgpetclinic.model.Owner;
import guru.springframework.sfgpetclinic.services.OwnerService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Set;

@RestController
public class OwnerApiController {

    private final OwnerService ownerService;

    public OwnerApiController(OwnerService ownerService) {
        this.ownerService = ownerService;
    }
    @GetMapping("/ownerdata")
    public Set<Owner> getOwnerData()
    {
        Set<Owner> ownerSet = ownerService.findAll();
        return ownerSet;
    }
}
